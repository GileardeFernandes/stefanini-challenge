using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Models;

namespace webapi.repository {

public class PeopleRepository {
    
    private readonly DataContext _context;
    public PeopleRepository(DataContext context){
      _context = context;
    }
    public bool findCPFPeople(string cpf){
          Task<People>  people  =  _context.People
                               .Include(people => people.user)
                               .Where(x => x.Cpf == cpf.ToString())
                               .AsNoTracking()
                               .FirstOrDefaultAsync();        

        
        return people.Result != null ? true : false;
      }   
    }

  }

