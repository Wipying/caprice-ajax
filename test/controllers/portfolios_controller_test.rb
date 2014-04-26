require 'test_helper'

class PortfoliosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get portfolio2" do
    get :portfolio2
    assert_response :success
  end

  test "should get portfolio3" do
    get :portfolio3
    assert_response :success
  end

  test "should get portfolio4" do
    get :portfolio4
    assert_response :success
  end

  test "should get post" do
    get :post
    assert_response :success
  end

end
