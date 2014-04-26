require 'test_helper'

class BlogsControllerTest < ActionController::TestCase
  test "should get blog" do
    get :blog
    assert_response :success
  end

  test "should get blog2" do
    get :blog2
    assert_response :success
  end

  test "should get post" do
    get :post
    assert_response :success
  end

  test "should get post2" do
    get :post2
    assert_response :success
  end

end
