def two_sum(nums, target)
    seen = Hash.new

    nums.each_with_index do |val, i| 
        dif = target - val
        if seen[dif] 
            return [seen[dif], i]
        else 
            seen[val] = i
        end 
    end
end


val = two_sum [1, 2, 3, 4], 3
puts val