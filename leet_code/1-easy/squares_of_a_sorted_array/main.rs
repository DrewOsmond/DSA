impl Solution {
    pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
        let mut squared: Vec<i32> = nums
            .iter().map(|x| x * x)
            .collect();
        squared.sort();
        squared
    }
}