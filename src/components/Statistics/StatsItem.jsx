import css from './Statistics.module.css';

export const StatsItem = ({ id, label, percentage }) => {
  function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})
    `;
  }
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
