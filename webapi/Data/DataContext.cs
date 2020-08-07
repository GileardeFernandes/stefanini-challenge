using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data {

    public class DataContext : DbContext {

  
     public  DataContext(DbContextOptions<DataContext> options) : base(options){
           
     }
   
   
     public DbSet<People> People {get; set;}
     public DbSet<User> User {get; set;}


    }
}