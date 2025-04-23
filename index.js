function calculatorFootprint() {
      const usage = document.getElementById('usage').value;
      if (usage && usage > 0) {
        const footprint = (usage * 0.2).toFixed(2); // Simple formula
        document.getElementById('result').innerText = `Estimated Carbon Footprint: ${footprint} kg CO₂/month`;
      } else {
        document.getElementById('result').innerText = 'Please enter a valid usage value.';
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
      document.getElementById('response').innerText = 'Thank you! Your message has been delivered.';
    }
 