using System;
using System.Collections.Generic;

namespace SrezAPIAuth.Models
{
    public partial class User
    {
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Middlename { get; set; } = null!;
        public byte[]? Photo { get; set; }
    }
}
