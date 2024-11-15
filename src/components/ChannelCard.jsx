import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useChannelContext } from '../context/ChannelContext';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { api } from '../services/api';
import FormEditChannel from './FormEditChannel';

const ChannelCard = ({ channel, onUpdate, onDelete }) => {
  const { volume, mute } = useChannelContext();
  const [loading, setLoading] = useState(true);

  const handleReady = () => {
    setLoading(false);
  };

  const isValidUrl = (url) => {
    return url && (url.startsWith('http') || url.startsWith('https'));
  };

  const handleDelete = async () => {
    if (window.confirm('¿Seguro que quieres borrar este canal?')) {
      try {
        await api.delete(`channels/${channel._id}`);
        onDelete(channel._id); // Actualiza el estado en el componente padre
        alert('Canal eliminado correctamente');
      } catch (error) {
        alert('Hubo un error al eliminar el canal');
        console.error(error);
      }
    }
  };

  return (
    <div className="card shadow-lg rounded-3 mb-4">
      <div className="card-body">
        <h4 className="card-title text-center">Nombre del Canal: {channel.name}</h4>
        <p className="card-text text-muted text-center font-weight-bold">
          Penta Nro: <span>{channel.pentaNummber}</span>
        </p>

        {loading && <div className="spinner-border" role="status"><span className="sr-only">Cargando...</span></div>}

        {isValidUrl(channel.url) ? (
          <div className="player-wrapper">
            <div className='edit-delete'>
            <MdDeleteForever className="m-2 text-danger" style={{ cursor: 'pointer' }} onClick={handleDelete} />
            <FormEditChannel channel={channel} onUpdate={onUpdate} />
            </div>
            <ReactPlayer
              url={channel.url}
              controls
              volume={volume}
              muted={mute}
              width="100%"
              height="200px"
              onReady={handleReady}
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
