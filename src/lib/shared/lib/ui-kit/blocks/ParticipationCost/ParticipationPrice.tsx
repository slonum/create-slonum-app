import styles from './ParticipationCost.module.scss';

interface IParticipationPriceProps {
  text: string;
  price: number;
}

export const ParticipationPrice: React.FC<IParticipationPriceProps> = ({
  text,
  price,
}) => {
  return (
    <div className={styles.participation__price}>
      <p className={styles.participation__priceNum}>{price} ₽</p>
      <p className={styles.participation__priceText}>{text}</p>
    </div>
  );
};
