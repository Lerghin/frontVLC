import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useChannelContext } from '../context/ChannelContext';

const ChannelCard = ({ channel }) => {
  const { volume, mute } = useChannelContext();
  const [loading, setLoading] = useState(true);

  const handleReady = () => {
    setLoading(false); // Cuando el video está listo
  };

  const isValidUrl = (url) => {
    return url && (url.startsWith('http') || url.startsWith('https'));
  };

  return (
    <div className="card shadow-lg rounded-3 mb-4">
      <div className="card-body">
        <h4 className="card-title text-center">Nombre del Canal: {channel.name}</h4>
        <p className="card-text text-muted text-center font-weight-bold">
         Penta Nro: <span>{channel.pentaNummber}</span>
        </p>
          hola
        {/* Mostrar un mensaje de carga si el video está en proceso de cargar */}
        {loading && <div className="spinner-border" role="status"><span className="sr-only">Cargando...</span></div>}

        {/* Verificamos si la URL es válida antes de mostrar el reproductor */}
        {isValidUrl(channel.url) ? (
          <div className="player-wrapper">
            <ReactPlayer
              url={channel.url}
              controls
              volume={volume}
              muted={mute}
              width="100%"
              height="200px"
              onReady={handleReady} // Llamada cuando el video se haya cargado
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            />
          </div>
        ) : (
          <div className="alert alert-warning text-center">
            <p>La URL del canal no es válida o está rota.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelCard;
