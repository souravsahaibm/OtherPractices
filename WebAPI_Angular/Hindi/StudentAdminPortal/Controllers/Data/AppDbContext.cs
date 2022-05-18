using Microsoft.EntityFrameworkCore;
using StudentAdminPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Controllers.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Student> student { get; set; }
        public DbSet<Gender> gender { get; set; }
        public DbSet<Address> address { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}
