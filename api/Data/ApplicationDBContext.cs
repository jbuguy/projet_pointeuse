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
                .HasMany(m => m.Employes)
                .WithMany(e => e.Machines);
            modelBuilder.Entity<Service>()
                .HasMany(s => s.Employes)
                .WithMany(m => m.Services);
            modelBuilder.Entity<Service>()
                .HasMany(s => s.Schedules)
                .WithOne(sch => sch.Service)
                .HasForeignKey(sch => sch.ServiceId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Service>()
                .HasOne(s => s.DefaultSchedule)
                .WithMany() 
                .HasForeignKey(s => s.DefaultScheduleId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);

        }
    }
}