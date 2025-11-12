'use client';

// GridLayoutTailwindSlackCards.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';

const items = [
  {
    id: 1,
    title: 'Slack Integration',
    desc: 'Add a field in the portal to let the user connect their Slack account.',
    badge: 'Development',
    comments: 8,
    links: 3,
    due: 'Tomorrow',
  },
  {
    id: 2,
    title: 'GitHub Sync',
    desc: 'Keep issues and PRs in sync with GitHub repositories.',
    badge: 'Backend',
    comments: 2,
    links: 5,
    due: 'Next week',
  },
  {
    id: 3,
    title: 'Figma Import',
    desc: 'Enable direct design import from Figma boards.',
    badge: 'Design',
    comments: 4,
    links: 1,
    due: 'In 3 days',
  },
  {
    id: 4,
    title: 'Notification Center',
    desc: 'Add central notification hub for all events.',
    badge: 'Frontend',
    comments: 12,
    links: 6,
    due: 'Friday',
  },
];

export function CardLayoutIdDemo() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <LayoutGroup>
      {/* 网格容器 */}
      <motion.div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {items.map((it) => (
          <motion.button
            key={it.id}
            onClick={() => setSelected(it)}
            className=" border-0 p-0 cursor-pointer text-left"
            layout
            initial={false}
          >
            <motion.div
              layoutId={`card-${it.id}`}
              className="bg-color border border-color rounded-2xl shadow-sm p-6 relative overflow-hidden text-color flex flex-col h-full"
            >
              {/* title + desc */}
              <h3 className="text-lg font-semibold text-color">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">{it.desc}</p>

              {/* badge + avatar */}
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium">{it.badge}</span>
              </div>

              {/* footer */}
              <div className="mt-4 pt-3 border-t border-color flex justify-between text-gray-400 text-sm">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">💬 {it.comments}</span>
                  <span className="flex items-center gap-1">🔗 {it.links}</span>
                </div>
                <span className="flex items-center gap-1">📅 {it.due}</span>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      {/* 详情弹层 */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-[1002]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="w-[92%] max-w-[880px] h-[86vh] max-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#3b2673]">{selected.title}</h3>
                  <p className="mt-1 text-gray-500">{selected.desc}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition" onClick={() => setSelected(null)}>
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto flex">
                {/* Left column */}
                <motion.div
                  className="flex-1 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="mt-6 text-lg font-semibold text-gray-800">Details</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">这里是展开后的任务详情区块，可以放更多描述、需求说明或子任务列表。</p>
                </motion.div>

                {/* Right column (sidebar) */}
                <motion.div
                  className="w-64 border-l border-gray-100 px-6 py-6 bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Due Date</h4>
                    <p className="text-gray-700">📅 {selected.due}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
