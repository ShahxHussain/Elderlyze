import React, { useEffect, useMemo, useState } from 'react';
import '../Assets/Css/Medicine.css';

const STORAGE_KEY = 'elderlyze.medicines';

function loadMedicines() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveMedicines(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function emptyForm() {
  return {
    id: '',
    name: '',
    dosage: '',
    schedule: '',
    mealTiming: 'before',
    timesPerDay: 1,
    startDate: '',
    endDate: '',
    notes: ''
  };
}

function Medicines() {
  const [items, setItems] = useState(() => loadMedicines());
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm());

  useEffect(() => { saveMedicines(items); }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((m) => `${m.name} ${m.dosage} ${m.schedule}`.toLowerCase().includes(q));
  }, [items, query]);

  function startAdd() {
    setForm({ ...emptyForm(), id: String(Date.now()) });
    setShowForm(true);
  }

  function startEdit(id) {
    const current = items.find((m) => m.id === id);
    if (!current) return;
    setForm(current);
    setShowForm(true);
  }

  function remove(id) {
    setItems((prev) => prev.filter((m) => m.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...form, name: form.name.trim() };
    if (!payload.name) return;
    setItems((prev) => {
      const exists = prev.some((m) => m.id === payload.id);
      return exists ? prev.map((m) => (m.id === payload.id ? payload : m)) : [payload, ...prev];
    });
    setShowForm(false);
  }

  return (
    <main className="meds">
      <div className="container">
        <div className="meds-header">
          <div>
            <h1 className="meds-title">Medicines</h1>
            <p className="meds-sub">Manage your current medications and schedules.</p>
          </div>
          <div className="meds-actions">
            <input
              className="meds-search"
              type="search"
              placeholder="Search medicines"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search medicines"
            />
            <button className="btn btn-primary" onClick={startAdd}>Add medicine</button>
          </div>
        </div>

        <div className="meds-list" role="list">
          {filtered.length === 0 && (
            <div className="meds-empty">No medicines yet. Click "Add medicine" to create one.</div>
          )}
          {filtered.map((m) => (
            <article key={m.id} className="meds-item" role="listitem">
              <div className="meds-item-main">
                <div className="meds-name">{m.name || 'Untitled'}</div>
                <div className="meds-meta">
                  {m.dosage && <span className="pill">{m.dosage}</span>}
                  {m.schedule && <span className="pill">{m.schedule}</span>}
                  {m.mealTiming && <span className="pill">{m.mealTiming === 'before' ? 'Before meal' : 'After meal'}</span>}
                  {m.timesPerDay ? <span className="pill">{m.timesPerDay}x/day</span> : null}
                  {(m.startDate || m.endDate) && (
                    <span className="pill">{m.startDate || '—'} → {m.endDate || '—'}</span>
                  )}
                </div>
                {m.notes && <div className="meds-notes">{m.notes}</div>}
              </div>
              <div className="meds-item-actions">
                <button className="btn btn-ghost" onClick={() => startEdit(m.id)}>Edit</button>
                <button className="btn btn-secondary" onClick={() => remove(m.id)}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="meds-modal" role="dialog" aria-modal="true">
          <div className="meds-modal-card">
            <div className="meds-modal-head">
              <h2>{items.some((x) => x.id === form.id) ? 'Edit medicine' : 'Add medicine'}</h2>
              <button className="btn btn-ghost" onClick={() => setShowForm(false)}>Close</button>
            </div>
            <form className="meds-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </label>
              <label>
                Dosage
                <input value={form.dosage} onChange={(e) => setForm({ ...form, dosage: e.target.value })} placeholder="e.g., 10 mg" />
              </label>
              <label>
                Schedule
                <input value={form.schedule} onChange={(e) => setForm({ ...form, schedule: e.target.value })} placeholder="e.g., twice daily" />
              </label>
              <label>
                Meal timing
                <select value={form.mealTiming} onChange={(e) => setForm({ ...form, mealTiming: e.target.value })}>
                  <option value="before">Before meal</option>
                  <option value="after">After meal</option>
                </select>
              </label>
              <label>
                Times per day
                <select value={form.timesPerDay} onChange={(e) => setForm({ ...form, timesPerDay: Number(e.target.value) })}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </label>
              <label>
                Start date
                <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
              </label>
              <label>
                End date
                <input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
              </label>
              <label>
                Notes
                <input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Optional" />
              </label>
              <div className="meds-form-actions">
                <button className="btn btn-ghost" type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button className="btn btn-primary" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Medicines;


