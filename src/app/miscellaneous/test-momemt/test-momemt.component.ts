import { Component, OnInit } from '@angular/core';
import moment from 'moment-timezone';

@Component({
  selector: 'app-test-momemt',
  templateUrl: './test-momemt.component.html',
})
export class TestMomemtComponent implements OnInit {
  activeTimeZone = "America/New_York";
  birthDate = "1990-06-02";
  currentDateInMiliseconds = moment();
  currentDate = moment().toDate();

  // Get year, month & date from a date
  currentYear = moment().year();
  currentMonth = moment().month() + 1;
  currentDt = moment().date();

  todayString = moment(this.currentDateInMiliseconds).format("MM/DD/YYYY");

  // Add & Substract years, days, months, minutes, seconds
  add2Years = moment().add(2, "years").format("YYYY/MM/DD");
  add2Months = moment().add(2, "months").format("YYYY/MM/DD");
  add2Days = moment().add(2, "days").format("YYYY/MM/DD");
  add2Hours = moment().add(2, "hours").toDate();
  add2Minutes = moment().add(2, "minutes").toDate();
  add2Seconds = moment().add(2, "seconds").toDate();
  sub2Years = moment().subtract(2, "years").format("YYYY/MM/DD");

  // Get date from dynamic string value
  dateFromString = moment(`${this.currentYear}-01-13`).toDate();

  // Get Date using Timezone
  getCurrUSADate = moment().tz(this.activeTimeZone).toISOString();

  // return moment(value, this.format).isValid();

//   return !d.isSame(moment('20200115'));


// ntPastDue = moment().tz(this.timeZoneManager.timezone).isAfter(moment(hit._source.assessment.dueDate).tz(this.timeZoneManager.timezone));
// this.isGoLiveAndWithin60Days = moment(days60FrmGoLive).tz(this.timezone).isSameOrAfter(this.currentDate);
// maxMeetingDate: Date = moment(new Date()).tz(this.timeZoneManager.timezone).add(60, 'days').toDate();
// minDate: Date = moment().tz(this.timeZoneManager.timezone).subtract(7, 'years').toDate();
// dueRange = moment().tz(this.timezone).startOf('day').format();
// dueRange = moment().tz(this.timezone).add(59, 'd').startOf('day').format();
// this.minDate = moment().tz(activeTimeZone).format('YYYY-MM-DD');
// const dateToBeCompared = moment().tz(this.activeTimeZone).add(-7, 'day').toDate();
//  this.toPrintDate = moment().tz(this.activeTimeZone).startOf('day').toDate().toISOString();

  constructor() { }

  ngOnInit(): void {
    console.log(moment());
    console.log(moment().toDate());
    console.log(moment().format("MM/DD/YYYY"));
    console.log(moment().format("YYYY MMM, DD"));

    console.log("==== Date Diff==");
    console.log(moment().diff(moment(this.birthDate), "years"));
    console.log(moment().diff(moment(this.birthDate), "months"));
    console.log(moment().diff(moment(this.birthDate), "days"));

    console.log("==== Check if valid ==");
    console.log(moment(this.birthDate, "YYYY/MM").isValid());

    console.log("==== isBefore ==");
    console.log(moment(this.birthDate).isBefore(moment()));
    console.log(moment(moment().add(5, "days")).isBefore(moment()));
    console.log(moment(moment().add(5, "days")).isAfter(moment()));

    console.log("==== Using Timezone ==");
    console.log(moment().tz(this.activeTimeZone).format("YYYY/MM/DD"));
    console.log(moment().tz("Asia/Kolkata").toDate());
    console.log(moment().tz(this.activeTimeZone).startOf("day").toDate());
    console.log(moment().tz(this.activeTimeZone).startOf("hour").toDate().toISOString());
  }

}
