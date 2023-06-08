using GoldenEleganceProyecto.Context;
using GoldenEleganceProyecto.Models;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace GoldenEleganceProyecto.Service.Services
{
    public class UsuariosServicio
    {

        private readonly ApplicationDbContext _context;
        private readonly ILogger _logger;

        public UsuariosServicio(ApplicationDbContext context, ILogger<Usuarios> logger)
        {
            _logger = logger;
            _context = context;

        }

        public async Task<List<Usuarios>> ObtenerLista()
        {
            List<Usuarios> lista = new List<Usuarios>();
            try
            {
                lista = await _context.Usuario.ToListAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return lista;


        }
    }
}
