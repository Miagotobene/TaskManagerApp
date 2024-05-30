// CREATE

model.create({ name: 'something', status: 'in progress', pomodoroComplete: 5  })
.then(newModel => {
   console.log('---- NEW MODEL -----', newModel);
})
.catch(error => console.log('---- ERROR ----\n', error));

// READ

// UPDATE

// DELETE