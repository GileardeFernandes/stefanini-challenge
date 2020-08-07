using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers {

   [ApiController]
   [Route("v1/users")] 
   public class UserController : ControllerBase {
      
    // [HttpGet]
    // [Route("")]
    // public async Task<ActionResult<List<User>>> Get([FromServices] DataContext context){

    //   var products = await context.Products.Include(product => product.category).ToListAsync();
    //   return products;
    // }

    [HttpGet]
    [Route("")]
    public async Task<ActionResult<User>> Get([FromServices] DataContext context, [FromQuery]string email, [FromQuery]string password){

      var user = await context.User
                           .Where(user => user.Email == email.ToString())
                           .AsNoTracking()
                           .FirstOrDefaultAsync();

      if(user == null)
         return BadRequest("Usuário não existe");

      if( user.Email == email.ToString() && user.Password == password.ToString())
        return user;
      else
       return BadRequest("Email ou senha inválidos");

    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<User>> Post(
      [FromServices] DataContext context,
      [FromBody]User model)
      {

        if(ModelState.IsValid){
          context.User.Add(model);
          await context.SaveChangesAsync();
          return model;
        }
        else{
          return BadRequest(ModelState);
        }
    }
  
  
   }
}