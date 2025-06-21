using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Filliale
    {
        public int Id { get; set; }
        public string Libelle { get; set; } = string.Empty;

        List<Site> Sites { get; set; } = new List<Site>();
    }
}