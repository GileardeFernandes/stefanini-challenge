using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Models;
using System.Linq;
using webapi.Utils;
using System.ComponentModel.DataAnnotations;
using webapi.repository;

namespace webapi.Controllers
{

  [ApiController]
  [Route("v1/people")]
  public class PeopleController : ControllerBase
  {

    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<People>>> Get([FromServices] DataContext context)
    {

      var people = await context.People.Include(people => people.user).ToListAsync();
      return people;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<People>> Post(
      [FromServices] DataContext context,
      [FromBody] People model)
    {
       PeopleRepository  repo = new PeopleRepository(context);
      if (ModelState.IsValid)
      {
         if (repo.findCPFPeople(model.Cpf.ToString()))
             return BadRequest("CPF já existe");

          context.People.Add(model);
          await context.SaveChangesAsync();
          var people = await context.People
                                    .Include(people => people.user)
                                    .Where(people => people.Cpf == model.Cpf)
                                    .AsNoTracking()
                                    .FirstOrDefaultAsync();
          return people;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

  [HttpPut]
  [Route("")]
    public async Task<ActionResult> Put(
      [FromServices] DataContext context, 
      [FromBody] People model,
      [FromQuery]int id
    )
    {
        try
        {
          
           model.Id = id;
           context.People.Update(model);
           await context.SaveChangesAsync();   
           return Ok();
          
        }
        catch (System.Exception e)
        {
            
            return BadRequest(e.Message);
        }
      }


  [HttpDelete]
  [Route("")]
    public async Task<ActionResult> Delete(
      [FromServices] DataContext context, 
      [FromQuery]int id
    )
    {
        try
        {
      
           var people = await context.People.FindAsync(id);

           if(people == null)
              return BadRequest("Id de usuário não existe");

           context.People.Remove(people);   
           await context.SaveChangesAsync();   
           return Ok();
          
        }
        catch (System.Exception e)
        {
            
            return BadRequest(e.Message);
        }
      }
     
    





  }
}