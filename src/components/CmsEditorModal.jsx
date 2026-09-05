'use client';

import React, { useState } from 'react';
import {
  Cancel01Icon,
  CheckmarkCircle02Icon,
  Download04Icon,
  CodeIcon,
} from 'hugeicons-react';

export default function CmsEditorModal({ data, onUpdateData, onClose }) {
  const [jsonString, setJsonString] = useState(JSON.stringify(data, null, 2));
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonString);
      onUpdateData(parsed);
      setError(null);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 800);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bento-card max-w-4xl w-full p-6 sm:p-8 space-y-4 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <CodeIcon className="w-5 h-5 text-[#65a30d] dark:text-[#a6f30d]" />
            <h3 className="font-questrial font-bold text-lg text-slate-900 dark:text-white">
              Live Portfolio JSON CMS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-slate-300"
          >
            <Cancel01Icon className="w-4 h-4" />
          </button>
        </div>

        {/* Error / Success Status */}
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono">
            Invalid JSON: {error}
          </div>
        )}
        {success && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckmarkCircle02Icon className="w-4 h-4" />
            <span>Portfolio data updated successfully!</span>
          </div>
        )}

        {/* JSON Code Textarea */}
        <div className="flex-1 min-h-[300px] relative">
          <textarea
            value={jsonString}
            onChange={e => setJsonString(e.target.value)}
            className="w-full h-full p-4 rounded-xl font-mono text-xs bg-slate-900 text-emerald-400 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#a6f30d] resize-none"
            spellCheck={false}
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-black/10"
          >
            <Download04Icon className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-[#a6f30d] hover:text-black dark:hover:bg-[#a6f30d] transition-all"
            >
              Save & Apply
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
