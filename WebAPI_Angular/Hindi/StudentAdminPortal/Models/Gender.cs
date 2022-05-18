using System.ComponentModel.DataAnnotations;

namespace StudentAdminPortal.Models
{
    public class Gender
    {
        [Key]
        public int GId { get; set; }
        public string Title { get; set; }

    }
}