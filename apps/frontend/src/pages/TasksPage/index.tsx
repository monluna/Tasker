import { CalendarWeek, GradientButton } from '../../components/UI';
import { CalendarMonth } from '../../components/UI';
import { TextDayTask } from '../../components/UI';

import {
  StyleTask_top,
  StyleTask_topRitht,
  StyleTask__img,
  StyleTask_textButton,
} from './style';
import PlusIcon from '../../assets/icons/plus.svg';

export function TasksPage() {
  return (
    <>
      <StyleTask_top>
        <TextDayTask />
        <StyleTask_topRitht>
          <CalendarWeek />
          <GradientButton>
            <StyleTask_textButton>
              Добавить
              <StyleTask__img src={PlusIcon} alt="Plus" />
            </StyleTask_textButton>
          </GradientButton>
        </StyleTask_topRitht>
      </StyleTask_top>
    </>
  );
}

export default TasksPage;
