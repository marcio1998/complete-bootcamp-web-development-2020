function bmiCalculator (weight, height){
    var bmi = Math.floor(weight/Math.pow(height,2));
    if(bmi < 18.5){
        return "Your BMI is " + bmi + ", so you are undeweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Your BMI is " + bmi + ", so you have a normal weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        return "Your BMI is " + bmi + ", so you are overweight";
    }else if(bmi >= 30 && bmi <= 34.9){
        return "Your BMI is " + bmi + ", so you are obese";
    }else{
        return "Your BMI is " + bmi + ", so you are Extremely Obese";
    }
}

var calculateBmi = bmiCalculator(90, 1.9);
alert(calculateBmi);