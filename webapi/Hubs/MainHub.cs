using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using webapi.Contracts;

namespace webapi.Hubs
{
    public class MainHub : Hub, IMainHub
    {
        private readonly IHubContext<MainHub> hubContext;
        public MainHub(IHubContext<MainHub> hubContext)
        {
            this.hubContext = hubContext;
        }

        public async Task UpdateClients()
        {
            await hubContext.Clients.All.SendAsync("ReceiveChanges");
        }
    }
}