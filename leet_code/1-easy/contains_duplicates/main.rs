// use std::collections::HashMap;
use std::collections::HashMap;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut vals = HashMap::new();

        for elem in nums {
            if vals.contains_key(&elem) {
                return true;
            } else {
                vals.insert(&elem, true);
            }
        }
    }

    return false;
}