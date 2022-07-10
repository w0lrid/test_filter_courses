//Исходные данные
// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// ---------

//Решение
const replaceNull = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      newArray.push(i === 0 ? 0 : Number.POSITIVE_INFINITY);
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Фильтрация курсов по заданному диапазону цен
const filterCoursesByPrice = (courses, ranges) => {
  const filteredCourses = [];
  ranges = replaceNull(ranges);

  courses.forEach((course) => {
    course.prices = replaceNull(course.prices);

    course.prices.forEach((price) => {
      if (ranges[0] <= price && price <= ranges[1]) {
        filteredCourses.push(course);
      }
    });
  });

  return [...new Set(filteredCourses)];
};
