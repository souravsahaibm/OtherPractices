// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StudentAdminPortal.Controllers.Data;

namespace StudentAdminPortal.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("StudentAdminPortal.Models.Address", b =>
                {
                    b.Property<int>("AId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("PhyAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PostAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SId")
                        .HasColumnType("int");

                    b.HasKey("AId");

                    b.ToTable("address");
                });

            modelBuilder.Entity("StudentAdminPortal.Models.Gender", b =>
                {
                    b.Property<int>("GId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GId");

                    b.ToTable("gender");
                });

            modelBuilder.Entity("StudentAdminPortal.Models.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("addressAId")
                        .HasColumnType("int");

                    b.Property<int>("genderId")
                        .HasColumnType("int");

                    b.Property<string>("image")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("addressAId");

                    b.HasIndex("genderId");

                    b.ToTable("student");
                });

            modelBuilder.Entity("StudentAdminPortal.Models.Student", b =>
                {
                    b.HasOne("StudentAdminPortal.Models.Address", "address")
                        .WithMany()
                        .HasForeignKey("addressAId");

                    b.HasOne("StudentAdminPortal.Models.Gender", "gender")
                        .WithMany()
                        .HasForeignKey("genderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("address");

                    b.Navigation("gender");
                });
#pragma warning restore 612, 618
        }
    }
}
