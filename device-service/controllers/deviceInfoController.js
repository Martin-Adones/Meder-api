const os = require('os');

exports.getDeviceInfo = async (req, res) => {
    try {
        // Obtener información del sistema operativo
        const osInfo = {
            platform: os.platform(),
            release: os.release(),
            type: os.type(),
            arch: os.arch(),
            hostname: os.hostname(),
            totalmem: os.totalmem(),
            freemem: os.freemem(),
            cpus: os.cpus()
        };

        // Obtener información de red
        const networkInterfaces = os.networkInterfaces();
        const networkInfo = [];

        // Procesar todas las interfaces de red
        Object.keys(networkInterfaces).forEach((interfaceName) => {
            networkInterfaces[interfaceName].forEach((interface) => {
                // Solo interfaces IPv4 que no sean loopback
                if (interface.family === 'IPv4' && !interface.internal) {
                    networkInfo.push({
                        interface: interfaceName,
                        ip: interface.address,
                        mac: interface.mac,
                        netmask: interface.netmask
                    });
                }
            });
        });

        const deviceInfo = {
            sistemaOperativo: {
                nombre: osInfo.platform,
                version: osInfo.release,
                tipo: osInfo.type,
                arquitectura: osInfo.arch,
                hostname: osInfo.hostname
            },
            red: networkInfo,
            hardware: {
                memoriaTotal: Math.round(osInfo.totalmem / (1024 * 1024 * 1024)) + ' GB',
                memoriaLibre: Math.round(osInfo.freemem / (1024 * 1024 * 1024)) + ' GB',
                procesadores: osInfo.cpus.map(cpu => cpu.model).join(', ')
            }
        };

        res.json(deviceInfo);
    } catch (error) {
        console.error('Error al obtener información del dispositivo:', error);
        res.status(500).json({ 
            error: 'Error al obtener información del dispositivo',
            detalles: error.message 
        });
    }
}; 