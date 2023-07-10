9.times do |i|
    Todo.create(
      title: "Foods #{i + 1}",
      description: '227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)'
      
    )
  end