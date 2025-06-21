using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Site
    {
        public int Id { get; set; }
        public string Libelle { get; set; } = string.Empty;

        List<Service> Services { get; set; } = new List<Service>();
    }
}