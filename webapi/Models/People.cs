using System.ComponentModel.DataAnnotations;
using webapi.Utils;
using webapi.Data;

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;
using System.Linq;
using System;

namespace webapi.Models {
 
  public class People {

    public string dateNow = DateTime.Now.ToString();
    [Key]
    public int Id {get; set;}

    // [Required(ErrorMessage = "Este compo é obrigatório")]
    // [MaxLength(60,ErrorMessage="Esse campo deve conter entre 3 e 60 caracteres")]
    // [MinLength(3,ErrorMessage= "Esse campo de conter entre 3 e 60 caracteres")]

    [Required(ErrorMessage = "Este compo é obrigatório")]
    public string Name {get; set;}

    public string Gender {get; set;}

   
    [EmailAddress(ErrorMessage = "Digit um Email válido")]
    public string Email {get; set;}
  
    
    [Required(ErrorMessage = "Este compo é obrigatório")]
    [DataType(DataType.Date)]
    [ValidateDateOfBirth]
    public DateTime BirthDate {get; set;}
    
    
    
    public string Nationality {get; set;}
   
    

    public string Naturalness {get; set;} 

 
    [Required(ErrorMessage = "Este compo é obrigatório")]
    [ValidateCPF]
    public string Cpf {get; set;} 

    public DateTime  createDate {get { return DateTime.Now; }}

    public DateTime LastUpdateDate {get { return DateTime.Now; }}

    public int UserId {get; set;}

    public User user {get; set;}
    
  }
}