using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Machine>()
                .HasMany(m => m.Services)
                .WithMany(s => s.Machines);
            modelBuilder.Entity<Machine>()
                .HasMany(m => m.Employees)
                .WithMany(e => e.Machines);
            modelBuilder.Entity<Service>()
                .HasMany(s => s.Employes)
                .WithMany(m => m.Services);
            
            base.OnModelCreating(modelBuilder);

        }
    }
}