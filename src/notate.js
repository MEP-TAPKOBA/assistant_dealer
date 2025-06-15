function onFormSubmit(e) {
    // Получаем URL вебхука (замените на свой)
    const webhookUrl = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN";
    // Получаем данные ответа
    const responses = e.response.getItemResponses();
    let score = 0;
    // Предполагается, что в вашей форме есть вопросы, настроенные как "Multiple Choice"
    // и в "Дополнительных настройках" у них указаны правильные ответы.
    // Проходим по всем ответам и проверяем правильность
    for (let i = 0; i < responses.length; i++) {
      const item = responses[i].getItem();
      const response = responses[i].getResponse();
      const correctAnswers = item.getHelpText().split(','); // Предполагаем, что правильные ответы разделены запятой
      const questionType = item.getType();
      let isCorrect = false;
  
     if (questionType ===  "MULTIPLE_CHOICE") {
          if (correctAnswers.includes(response.toString())) {
            isCorrect = true;
          }
        } else if (questionType === "CHECKBOX") {
           // Для чекбоксов нужно проверить, что все выбранные ответы правильные
           let selectedAnswers = response;
           if (selectedAnswers) {
               isCorrect = true;
               for (let j = 0; j < selectedAnswers.length; j++){
                   if (!correctAnswers.includes(selectedAnswers[j])){
                      isCorrect = false;
                       break;
                   }
               }
           } else {
             isCorrect = false;
           }
  
      } else if (questionType === "TEXT") {
          // Для текстовых вопросов, проверяем совпадение
          if (correctAnswers.includes(response.toString().trim())){
              isCorrect = true;
          }
      }
      if (isCorrect) {
        score++;
      }
    }
  
    // Отправляем сообщение в Discord
    const payload = {
      content: `Тест завершен! Количество баллов: ${score}`,
    };
  
    const options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
    };
  
    UrlFetchApp.fetch(webhookUrl, options);
  }