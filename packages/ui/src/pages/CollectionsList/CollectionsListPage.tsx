


import { Collection } from '@flash-cards/models';
import { ICardsRepository } from '@flash-cards/repositories';
import { useEffect, useState } from 'react';
import { IconButton, PlusLgIcon } from '../../components';
import { ServiceType, useService } from '../../inversify';
import "./collections-list-styles.css";
import CollectionView from './CollectionView';
// const collection
export const CollectionsListPage = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const cardsRepo = useService<ICardsRepository>(ServiceType.CardsRepository);

  useEffect(() => {
    (async () => {
      const result = await cardsRepo.getCollections();
      setCollections(result);
    })()
  }, [cardsRepo])

  return (
    <div>

      <h1 className='text-primary'>Omega Flashcards</h1>
      <h4>Pick a set to practice</h4>
      <div className="mt-5">
        {
          collections.map((collection) => (
            <CollectionView key={collection.id} collection={collection} />
          ))
        }
      </div>
      <IconButton
        buttonProps={{
          className: "btn btn-primary rounded-5 add-button"
        }}
        iconPosition="center"
        icon={<PlusLgIcon />}
      />
    </div>
  )
}

