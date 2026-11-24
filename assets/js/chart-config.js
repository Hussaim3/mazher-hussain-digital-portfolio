/**
 * CHART-CONFIG.JS - Shared Accessible Chart.js Presets
 * Author: Mazher Hussain Digital Portfolio
 */

export const ChartColors = {
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  blocked: '#fb7185',
  info: '#38bdf8',
  ai: '#a855f7',
  muted: '#64748b',
  text: '#f8fafc',
  border: 'rgba(255, 255, 255, 0.1)'
};

export function getAccessibleChartDefaults() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 500
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: ChartColors.text,
          font: {
            family: "'JetBrains Mono', monospace",
            size: 11
          },
          padding: 16
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: 'rgba(56, 189, 248, 0.3)',
        borderWidth: 1,
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        titleFont: {
          family: "'Space Grotesk', sans-serif",
          weight: 'bold'
        },
        bodyFont: {
          family: "'JetBrains Mono', monospace"
        },
        padding: 10
      }
    }
  };
}
