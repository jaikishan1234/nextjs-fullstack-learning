export async function PUT(request, {params}) {
 const data = await request.json();

 const updatedTodo = {
  id: params.id,
  ...data,
 };

 // assuming that we have updated the todo in the database and returned the updated todo
    return Response.json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo
    })
}


export async function PATCH(request, {params}) {
 const data = await request.json();

 const updatedTodo = {
  id: params.id,
  ...data,
 };

 // assuming that we have updated the todo in the database and returned the updated todo
    return Response.json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo
    })
}



export async function DELETE(request, {params}) {
 const data = await request.json();

 const updatedTodo = {
  id: params.id,
  ...data,
 };

 // assuming that we have updated the todo in the database and returned the updated todo
    return Response.json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo
    })
}
