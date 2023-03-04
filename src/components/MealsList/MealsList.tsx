import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import IMeal from '../../models/IMeal';
import MealItem from './MealItem';

type MealsListProps = {
  readonly data: IMeal[];
};

const MealsList: FC<MealsListProps> = ({data}): JSX.Element => {
  const keyExtractorHandler = ({id}: IMeal): string => id;
  const renderMealItemHandler: ListRenderItem<IMeal> = ({
    item: MealItemProps,
  }): JSX.Element => <MealItem key={MealItemProps.id} {...MealItemProps} />;

  return (
    <FlatList
      data={data}
      renderItem={renderMealItemHandler}
      keyExtractor={keyExtractorHandler}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
    />
  );
};

export default MealsList;
