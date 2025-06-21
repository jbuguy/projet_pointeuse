using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Threading.Tasks;

namespace api.Models
{
    public class Employe
    {
        public int Id { get; set; }
        public string First_name { get; set; } = string.Empty;
        public string Last_name { get; set; } = string.Empty;
        public DateTime Birth_date { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Fixnumber { get; set; } = string.Empty;
        public DateTime Hire_date { get; set; }
        public bool Is_active { get; set; }
        public List<Service> Services { get; set; } = new List<Service>();
        public List<Machine> Machines { get; set; } = new List<Machine>();
        public string Codepointeuse { get; set; } = string.Empty;
        public string Qualification { get; set; } = string.Empty;
        public string Niveau_educatif { get; set; } = string.Empty;
        public string Situation_familiale { get; set; } = string.Empty;
        public int Nombre_enfants { get; set; }
        public bool Soumis_hs { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Mcl { get; set; }//mode de calcul mensuel
        [Column(TypeName = "decimal(18,2)")]

        public decimal Mcj { get; set; }//mode de calcul journalier
        public string Type_contrat { get; set; } = string.Empty;
        public DateTime Date_embauche_debut { get; set; }
        public DateTime Date_embauche_fin { get; set; }

        public List<Period> Periods { get; set; } = new List<Period>();
    }
}