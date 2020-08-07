using System;
using System.ComponentModel.DataAnnotations;

namespace webapi.Utils
{
  /// <summary>
  /// Realiza a validação do CPF
  /// </summary>
  public  class ValidateCPF : ValidationAttribute 
  {
    protected override  ValidationResult IsValid(object cpf, 
                                                ValidationContext validationContext) 
    {
      int[] multiplicador1 = new int[9] { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
      int[] multiplicador2 = new int[10] { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };
      string tempCpf;
      string digito;
      int soma;
      int resto;
      cpf = cpf.ToString().Trim();
      cpf = cpf.ToString().Replace(".", "").Replace("-", "");
      if (cpf.ToString().Length != 11)
         return new ValidationResult("CPF com menos de 11 dígitos"); 
      tempCpf = cpf.ToString().Substring(0, 9);
      soma = 0;

      for (int i = 0; i < 9; i++)
        soma += int.Parse(tempCpf[i].ToString()) * multiplicador1[i];
      resto = soma % 11;
      if (resto < 2)
        resto = 0;
      else
        resto = 11 - resto;
      digito = resto.ToString();
      tempCpf = tempCpf + digito;
      soma = 0;
      for (int i = 0; i < 10; i++)
        soma += int.Parse(tempCpf[i].ToString()) * multiplicador2[i];
      resto = soma % 11;
      if (resto < 2)
        resto = 0;
      else
        resto = 11 - resto;
      digito = digito + resto.ToString();

      return cpf.ToString().EndsWith(digito) ?  ValidationResult.Success : new ValidationResult("CPF inválido");      
                                                                                                                    
    }
  }
}