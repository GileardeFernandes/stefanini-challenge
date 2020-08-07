using System.ComponentModel.DataAnnotations;

namespace webapi.Models {
 
  public class User {

    [Key]
    public int Id {get; set;}

    [Required(ErrorMessage = "Este compo é obrigatório")]
    public string Name {get; set;}
   
    [Required(ErrorMessage = "Este compo é obrigatório")]
    [EmailAddress(ErrorMessage = "Digit um Email válido")]
    public string Email {get; set;}
    
    [Required(ErrorMessage = "Este compo é obrigatório")]
    public string Password {get; set;}

  }
}