using System.ComponentModel.DataAnnotations;

namespace webapi
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }
    }
}