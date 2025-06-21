using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Designation { get; set; } = string.Empty;
        
        public string Name { get; set; } = string.Empty;
        public bool Active { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolereanceCalcul { get; set; }
        public bool SoumisHS { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal DureeLimite { get; set; }
    }
}