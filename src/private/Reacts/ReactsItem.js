import React from 'react';

function ReactsItem({ item, onCancel, onSave }) {
  const [formData, setFormData] = React.useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card p-3 mt-3 shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Nome</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Trigger</label>
          <input
            className="form-control"
            name="trigger"
            value={formData.trigger.name}
            onChange={handleChange}
          />
        </div>  
        <div className="mb-2">
          <label className="form-label">Do</label>
          <input
            className="form-control"
            name="do"
            value={formData.do.name}
            onChange={handleChange}
          />
        </div>  

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">Salvar</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default ReactsItem;