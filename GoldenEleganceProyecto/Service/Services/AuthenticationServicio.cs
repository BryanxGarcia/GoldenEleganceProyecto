using GoldenEleganceProyecto.Context;
using GoldenEleganceProyecto.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Contracts;
using System.Security.Claims;
using GoldenEleganceProyecto.Models.Helpers;
using Microsoft.AspNetCore.Mvc;
using GoldenEleganceProyecto.Service.IServices;

namespace GoldenEleganceProyecto.Service.Services
{
    public class AuthenticationServicio : IAuthenticationServicio
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger _logger;
        public AuthenticationServicio(ApplicationDbContext context, ILogger<Usuarios> logger)
        {
            _logger = logger;
            _context = context;

        }

        public async Task<ResponseHelper> LoginUsuario(Usuarios usuario)
        {
            var user = await _context.Usuario.FirstOrDefaultAsync(x => x.Correo == usuario.Correo && x.Password ==usuario.Password);

            if (user == null)
                return new ResponseHelper { Success = false, HelperData = "No se encontro el usuario", Message = "El usuario no pudo ser encontrado" };

            return new ResponseHelper { Success = true, Message = "Inicio de sesion correcto" };
        }

        public async Task<ResponseHelper> RegistrarUsuario(Usuarios usuario)
        {
            if(usuario == null)
                return new ResponseHelper { Success = false, Message = "Necesitas rellenar los campos solicitados" };

            await _context.Usuario.AddAsync(usuario);
            await _context.SaveChangesAsync();
            return new ResponseHelper { Success = true, Message = "El usuario fue creado correctamente" };
        }


        public Task<ResponseHelper> LogoutUsuario(bool isLogout)
        {
            throw new NotImplementedException();
        }

        public Task<Usuarios> ObtenerUsuario(int? Id)
        {
            throw new NotImplementedException();
        }

       

        public Task<ResponseHelper> ResetPassword(string correo)
        {
            throw new NotImplementedException();
        }
    }
}
