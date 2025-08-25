import React, { useMemo, useState } from 'react';
import '../Assets/Css/SOS.css';

function emptyContact() {
  return { id: '', name: '', relation: '', phone: '', priority: 'primary' };
}

function SOSInteraction() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState(emptyContact());
  const [autoSos, setAutoSos] = useState(true);
  const [hours, setHours] = useState(3);

  const isEditing = useMemo(() => contacts.some(c => c.id === form.id), [contacts, form.id]);

  function startAdd() {
    setForm({ ...emptyContact(), id: String(Date.now()) });
  }

  function edit(id) {
    const c = contacts.find(x => x.id === id);
    if (c) setForm(c);
  }

  function remove(id) {
    setContacts(prev => prev.filter(x => x.id !== id));
    if (form.id === id) setForm(emptyContact());
  }

  function submit(e) {
    e.preventDefault();
    const payload = { ...form, name: form.name.trim(), relation: form.relation.trim(), phone: form.phone.trim() };
    if (!payload.name || !payload.phone) return;
    setContacts(prev => {
      const exists = prev.some(x => x.id === payload.id);
      return exists ? prev.map(x => (x.id === payload.id ? payload : x)) : [payload, ...prev];
    });
    setForm(emptyContact());
  }

  return (
    <main className="sos">
      <div className="container">
        <div className="sos-header">
          <div>
            <h1 className="sos-title">SOS Settings</h1>
            <p className="sos-sub">Add emergency contacts and configure inactivity alerts.</p>
          </div>
          <div className="sos-actions">
            <button className="btn btn-primary" onClick={startAdd}>Add contact</button>
          </div>
        </div>

        <section className="sos-card">
          <h2 className="section-title">Auto SOS</h2>
          <div className="sos-row">
            <label className="switch">
              <input type="checkbox" checked={autoSos} onChange={(e) => setAutoSos(e.target.checked)} />
              <span>Enable auto alert on inactivity</span>
            </label>
            <label className="inline">
              Inactivity window (hours)
              <select value={hours} onChange={(e)=> setHours(Number(e.target.value))} disabled={!autoSos}>
                {[1,2,3,4,6,8,12,24].map(h => <option key={h} value={h}>{h}</option>)}
              </select>
            </label>
          </div>
          <p className="muted">By default, an alert is sent after 3 hours of inactivity.</p>
        </section>

        <section className="sos-card">
          <h2 className="section-title">Contacts</h2>
          <form className="sos-form" onSubmit={submit}>
            <div className="grid">
              <label>
                Name
                <input value={form.name} onChange={(e)=> setForm({ ...form, name: e.target.value })} placeholder="e.g., Sara Khan" required />
              </label>
              <label>
                Relation
                <input value={form.relation} onChange={(e)=> setForm({ ...form, relation: e.target.value })} placeholder="e.g., Daughter" />
              </label>
              <label>
                Phone
                <input value={form.phone} onChange={(e)=> setForm({ ...form, phone: e.target.value })} placeholder="e.g., +92 3xx xxxxxxx" required />
              </label>
              <label>
                Priority
                <select value={form.priority} onChange={(e)=> setForm({ ...form, priority: e.target.value })}>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                </select>
              </label>
            </div>
            <div className="form-actions">
              {isEditing && <button type="button" className="btn btn-ghost" onClick={()=> setForm(emptyContact())}>Cancel</button>}
              <button className="btn btn-primary" type="submit">{isEditing ? 'Update' : 'Save'}</button>
            </div>
          </form>

          <div className="contact-list" role="list">
            {contacts.length === 0 && <div className="empty">No contacts yet. Add a primary contact to begin.</div>}
            {contacts.map(c => (
              <article key={c.id} className="contact-item" role="listitem">
                <div className="contact-main">
                  <div className="contact-name">{c.name}</div>
                  <div className="contact-meta">
                    {c.relation && <span className="pill">{c.relation}</span>}
                    <span className="pill">{c.priority === 'primary' ? 'Primary' : 'Secondary'}</span>
                    {c.phone && <span className="pill">{c.phone}</span>}
                  </div>
                </div>
                <div className="contact-actions">
                  <button className="btn btn-ghost" onClick={() => edit(c.id)}>Edit</button>
                  <button className="btn btn-secondary" onClick={() => remove(c.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default SOSInteraction;

