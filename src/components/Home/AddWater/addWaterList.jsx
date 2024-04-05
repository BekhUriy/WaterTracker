// import { useDispatch, useSelector } from "react-redux";
// import { getPortions } from "../../redux/addWater/addWaterSelector"
// import { useEffect } from "react";
// import { getWaterPortionsThunk } from "../../redux/addWater/addWaterOperations";
import {
 
  IconButtonFrameTwo,
  IconFramTwo,
  ListItem,
  StyledAddWaterListContainer,
  StyledAddWaterListFrame,
  StyledAddWaterMainContainer,
  StyledButtonText,
  StyledDataContainer,
  StyledLeftContainer,
  StyledListAddWater,
  StyledListHeader,
  StyledRightContainer,
  StyledTime,
  StyledWater,
} from './StyledaddWaterList';

import EditIcon from './Icons/EditIcon';
import TrashIcon from './Icons/TrashIcon';
import { AddWaterButton, Icon, IconButton } from './IconButtons';
import { GlassIcon } from './Icons/GlassIcon';
import { PlusIconSmall } from './Icons/PlusIcon';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import{EditWaterModal} from './EditWater'
import { DeleteModal } from './DeleteModal';
import CrossbarModal from '../Crossbar/CrossbarModal';
// import { useSelector } from 'react-redux';
// import { getWater } from '../../../redux/addWater/addWaterSelector';
export const AddWaterList = () => {
  //  const dispatch = useDispatch();
  //  const [isLargeScreen, setIsLargeScreen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const handleOpenAddModal = () => {
    setIsModalOpen(true);
  };
  const closeAddModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
      // const {waterRecords, isLoading, error} = useSelector(getWater);
  // useEffect(()=>{
  // dispatch(getWaterPortionsThunk())
  // })
  // if (!water || water.length === 0 ) return;
  // const WaterRecordsListItems = water.map((waterRecord)=>{
    //  //     return(
  //         <li key={water.id}>
  //             {water.amount}{water.time}
  //         </li>
  //     )
  // })
  const WaterRecordsListItems = () => {
    return (
      <ListItem>
        <StyledLeftContainer>
          <Icon>
            <IconFramTwo>
              <GlassIcon />
            </IconFramTwo>
          </Icon>
          <StyledDataContainer>
            <StyledWater>200ml</StyledWater>
            <StyledTime>11:00 AM</StyledTime>
          </StyledDataContainer>
        </StyledLeftContainer>
        <StyledRightContainer>
          <IconButton >
            <EditIcon onClick={handleOpenEditModal} />
          </IconButton>
          <IconButton>
            <TrashIcon onClick={handleOpenDeleteModal} />
          </IconButton>
        </StyledRightContainer>
      </ListItem>
    );
  };
  const PortionsList = () => {
    return (
      // {portions.length>0? portionsListItem :null}
      <StyledListAddWater>
        {' '}
        <WaterRecordsListItems />
        <WaterRecordsListItems />
        <WaterRecordsListItems />
        <WaterRecordsListItems />
        <WaterRecordsListItems />
      </StyledListAddWater>
    );
  };

  return (
  
      <div>
      <StyledAddWaterListContainer>
            <StyledListHeader>Today</StyledListHeader>
               <StyledAddWaterListFrame>
            <PortionsList />
                </StyledAddWaterListFrame>
            <AddWaterButton  >
            <IconButtonFrameTwo>
           <PlusIconSmall /> 
           </IconButtonFrameTwo>
           <StyledButtonText>Add water</StyledButtonText>
        </AddWaterButton>
      </StyledAddWaterListContainer>
      <EditWaterModal isOpen={isEditModalOpen} onClose={closeEditModal} />
      <CrossbarModal isOpen={isModalOpen} onClose={closeAddModal} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}/>
      </div>

   
  );
};
