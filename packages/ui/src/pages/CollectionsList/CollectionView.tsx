import { Collection } from '@flash-cards/models';
import { useMemo } from 'react';
import { Colors } from './colors';
import "./collections-list-styles.css"
import { CaretRightSquareFill } from '../../components/icons';
import { IconButton } from '../../components';

export type CollectionViewProps = {
  collection: Collection;
}

const useRandomColors = () => {
  const randomInt = (Math.random() * 2);
  const normalized = Math.round(randomInt);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => Colors[normalized], []);
}
export default function CollectionView({ collection }: CollectionViewProps) {
  const color = useRandomColors();
  if (!color) {
    return <></>
  }
  return (
    <div className=" collection-view card mb-4 rounded-4 p-4" style={{
      background: color.primary
    }} >
      <span style={{ background: color.secondary }} className="dot"></span>
      <span style={{ background: color.secondary }} className="right-bottom-corner"></span>
      <div className="card-body">
        <h1 style={{
          color: color.text,
          fontSize: "2.5rem"
        }}
          className="mb-4"
        >
          {collection.name}
        </h1>
        <IconButton
          buttonProps={{
            className: "btn",
            style: {
              width: "80%",
              background: color.secondary,
              color: color.primary
            }
          }}

          label='23 cards'
          iconPosition='right'
          icon={<CaretRightSquareFill />}
        />
      </div>
    </div >
  )
}