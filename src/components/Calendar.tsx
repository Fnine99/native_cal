import React, {useRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import {agendaItems, getMarkedDates} from './mockagendaItems';
import AgendaItem from './mock_AgendaItems';
import {getTheme, themeColor, lightThemeColor} from './mockTheme';

import { theme } from 'theme';
import Container from './common/Container';

const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const ExpandableCalendarScreen = (props: Props) => {
  const {weekView} = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor
  });


  const onDateChanged = useCallback((date, updateSource) => {
    console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  }, []);

  const onMonthChange = useCallback(({dateString}) => {
    console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item}/>;
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton
      disabledOpacity={0.6}
      theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      
      {weekView ? (
        <WeekCalendar testID={'weekCalendar'} firstDay={1} markedDates={marked.current}/>
      ) : (

        <ExpandableCalendar
          testID={'expandableCalendar'}
          // horizontal={false}
          hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          theme={theme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
        //   leftArrowImageSource={leftArrowIcon}
        //   rightArrowImageSource={rightArrowIcon}
          animateScroll
          // closeOnDayPress={false}
        />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 10,
    paddingRight: 10,    
  },
  header: {
    backgroundColor: '#fff'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  }
});