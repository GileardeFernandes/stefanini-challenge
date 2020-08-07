using System;
using System.ComponentModel.DataAnnotations;
using webapi.Models;

namespace webapi.Utils
{

  public  class ValidateDateOfBirth : ValidationAttribute 
  {
    protected override ValidationResult IsValid(object date, ValidationContext validationContext)  
        {
            var people = (People)validationContext.ObjectInstance;

            if( DateTime.Now == people.BirthDate ||  people.BirthDate  > DateTime.Now )
                 return new ValidationResult("Da de aniversário não pode ser hoje nem datas futuras");   
      
            // var data = DateTime.Today.Year - people.BirthDate.Year;  

            //  if (data > 150)
            //      return new ValidationResult("Verificar data de aniversário, máxima idade 150 anos");   
            

            // if (data < 1 ) 
            //       return new ValidationResult("Verificar data de aniversário, idade  mínima 1 ano"); 

              return  ValidationResult.Success ;
        }  
  }
}