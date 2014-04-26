require 'test_helper'

class FeaturesControllerTest < ActionController::TestCase
  test "should get button" do
    get :button
    assert_response :success
  end

  test "should get tab" do
    get :tab
    assert_response :success
  end

  test "should get testmonial" do
    get :testmonial
    assert_response :success
  end

  test "should get typography" do
    get :typography
    assert_response :success
  end

  test "should get icon" do
    get :icon
    assert_response :success
  end

end
