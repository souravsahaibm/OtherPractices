using System.ComponentModel.DataAnnotations;

namespace StudentAdminPortal.Models
{
    public class Address
    {
        [Key]
        public int AId { get; set; }
        public string PhyAddress { get; set; }
        public string PostAddress { get; set; }
        public int SId { get; set; }
    }
}