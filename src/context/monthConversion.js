const sortData = (data) => {
  return data.sort((a, b) => {
    return new Date(a.dateymd) - new Date(b.dateymd);
  });
};
const cdate = (data) => {
  return data.map((el) => {
    const newEl = { ...el };
    newEl.date = new Date(newEl.dateymd);
    newEl.dailyconfirmed = parseInt(newEl.dailyconfirmed);
    newEl.dailydeceased = parseInt(newEl.dailydeceased);
    newEl.dailyrecovered = parseInt(newEl.dailyrecovered);
    return newEl;
  });
};

const reduceByMonth = (data) => {
  if (data) {
    return data.reduce((total, current, index) => {
      const month = {
        dailyconfirmed: 0,
        dailydeceased: 0,
        dailyrecovered: 0,
        date: null,
      };
      if (
        index !== 0 &&
        total &&
        total[total.length - 1] &&
        total[total.length - 1].date &&
        monthsMatch(total[total.length - 1].date, current.date)
      ) {
        total[total.length - 1].dailyconfirmed =
          total[total.length - 1].dailyconfirmed + current.dailyconfirmed;
        total[total.length - 1].dailydeceased =
          total[total.length - 1].dailydeceased + current.dailydeceased;
        total[total.length - 1].dailyrecovered =
          total[total.length - 1].dailyrecovered + current.dailyrecovered;
        return total;
      } else {
        month.date = new Date(
          current.date.getFullYear(),
          current.date.getMonth()
        );
        month.dailyconfirmed = month.dailyconfirmed + current.dailyconfirmed;
        month.dailydeceased = month.dailydeceased + current.dailydeceased;
        month.dailyrecovered = month.dailyrecovered + current.dailyrecovered;
        total.push(month);
        return total;
      }
    }, []);
  } else {
    console.error('Cannot reduce undefined data');
    return [];
  }
};

const monthsMatch = (dateA, dateB) => {
  if (dateA.getFullYear() === dateB.getFullYear()) {
    return dateA.getMonth() === dateB.getMonth();
  } else {
    return false;
  }
};

export const monthConversion = (data) => {
  const arr = sortData(data);
  const newArr = cdate(arr);
  const month = reduceByMonth(newArr);

  return month;
};
